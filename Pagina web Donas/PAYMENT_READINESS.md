# More Donuts — pagos digitales

Estado: preparado para integración, no habilitado para cobros reales.

## Apple Pay en la web

- Publicar el sitio en HTTPS con TLS 1.2+.
- Crear el Merchant ID y certificados en Apple Developer.
- Verificar el dominio y publicar el archivo oficial de Apple en `/.well-known/apple-developer-merchantid-domain-association`.
- Implementar en un backend la validación de la sesión del comerciante y la confirmación del pago. Las claves/certificados nunca deben estar en `app.js` ni en el navegador.

## Google Pay en la web

- Registrar el dominio en Google Pay & Wallet Console.
- Elegir un gateway participante y configurar su tokenización; no usar `DIRECT` salvo que exista un entorno PCI DSS validado.
- Probar en `TEST`, solicitar revisión y cambiar a `PRODUCTION` únicamente después de la aprobación.

## Bloqueadores actuales

- Este proyecto es un frontend estático servido desde `file://`; Apple Pay y Google Pay requieren un dominio HTTPS real.
- No hay backend de checkout ni gateway configurado; por eso las opciones de pago digital se muestran como “en preparación”.
- Antes de activar cobros: validar el total en servidor, usar idempotencia, registrar webhooks firmados y no guardar datos de tarjeta.

Referencias oficiales:

- Apple: https://developer.apple.com/documentation/applepayontheweb/configuring-your-environment
- Apple: https://developer.apple.com/documentation/applepayontheweb/providing-merchant-validation
- Google Pay: https://developers.google.com/pay/api/web/guides/setup
- Google Pay: https://developers.google.com/pay/api/web/guides/test-and-deploy/publish-your-integration
