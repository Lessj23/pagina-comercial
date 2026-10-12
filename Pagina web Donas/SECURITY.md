# Revisión de seguridad — More Donuts

- Se retiraron las cuentas y contraseñas de demostración codificadas en el frontend.
- Las nuevas cuentas locales usan un hash SHA-256 para evitar guardar la contraseña en texto plano; esto sigue siendo una demo y no sustituye autenticación de servidor.
- Se añadió una política CSP básica, `strict-origin-when-cross-origin` y `rel="noopener noreferrer"` en enlaces externos con nueva pestaña.
- No se deben guardar tokens de Meta, claves privadas, certificados de Apple Pay ni datos de tarjeta en `localStorage` o en archivos públicos.
- Para producción, mover autenticación, autorización de administrador, pedidos y pagos a un backend con cookies `HttpOnly`, CSRF, rate limiting, validación de entrada y logs sin datos sensibles.
- Revisar y reemplazar el token de verificación de WhatsApp antes de publicar; el token actual del demo no es secreto.
