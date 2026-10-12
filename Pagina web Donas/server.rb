require 'webrick'

port = 8080
root = File.expand_path(__dir__)

# Trap signals for graceful shutdown
trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

server = WEBrick::HTTPServer.new(
  Port: port,
  BindAddress: '0.0.0.0',
  AccessLog: [],
  Logger: WEBrick::Log.new($stderr, WEBrick::Log::INFO)
)

MIME_TYPES = {
  '.html' => 'text/html; charset=utf-8',
  '.htm'  => 'text/html; charset=utf-8',
  '.css'  => 'text/css; charset=utf-8',
  '.js'   => 'application/javascript; charset=utf-8',
  '.json' => 'application/json; charset=utf-8',
  '.svg'  => 'image/svg+xml',
  '.png'  => 'image/png',
  '.jpg'  => 'image/jpeg',
  '.jpeg' => 'image/jpeg',
  '.ico'  => 'image/x-icon',
  '.woff2' => 'font/woff2',
  '.woff' => 'font/woff'
}

# Mount custom handler that reads files into memory strings (avoiding OS sendfile EPERM error)
server.mount_proc '/' do |req, res|
  rel_path = req.path
  rel_path = '/index.html' if rel_path == '/' || rel_path.empty?

  file_path = File.join(root, WEBrick::HTTPUtils.unescape(rel_path))
  file_path = File.expand_path(file_path)

  if file_path.start_with?(root) && File.file?(file_path)
    ext = File.extname(file_path).downcase
    res['Content-Type'] = MIME_TYPES[ext] || 'application/octet-stream'
    res['Access-Control-Allow-Origin'] = '*'
    res['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    # IMPORTANT: reading as a String guarantees no sendfile/copy_stream EPERM
    content = File.binread(file_path)
    res.body = content
    res['Content-Length'] = content.bytesize
    res.status = 200
  else
    res.status = 404
    res['Content-Type'] = 'text/plain; charset=utf-8'
    res.body = "404 - Not Found: #{rel_path}"
  end
end

puts "=========================================================="
puts "🍩 More Donuts Servidor Web Activo (Modo Compatible)"
puts "📍 Abre tu navegador en: http://localhost:#{port}"
puts "=========================================================="

server.start
