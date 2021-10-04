from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    # api / admin page
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
    # auth
    path("auth/", include("drf_social_oauth2.urls", namespace="drf")),
    # path("auth/", obtain_auth_token),  # allow use post to get token
    path("user/", include("user.urls", namespace="user")),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    # docs
    path("", TemplateView.as_view(template_name="index.html")),
    path("docs/", include_docs_urls(title="API Documentation")),
    path(
        "schema/",
        get_schema_view(
            title="API", description="Go to /docs for API documentation", version="0.0.1"
        ),
        name="openapi-schema",
    ),
]
