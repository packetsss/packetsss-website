"""
Channels provides routing classes that allow you to combine and stack your consumers (and any other valid ASGI application) to dispatch based on what the connection is.
"""

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from chat.routing import websocket_urlpatterns

# Django's ASGI application to handle traditional HTTP requests
application = ProtocolTypeRouter(
    {
        # WebSocket chat handler and utilizes authentication
        "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
    }
)
