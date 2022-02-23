from django.db import models
from django.contrib import admin
from django.forms import Textarea
from user.models import CustomUser
from django.contrib.auth.admin import UserAdmin

# register new users in admin dashboard
class UserAdminConfig(UserAdmin):
    model = CustomUser
    search_fields = (
        "username",
        "email",
        "first_name",
        "lastname",
    )
    list_filter = (
        "is_active",
        "is_staff",
    )
    ordering = ("-start_date",)
    list_display = (
        "username",
        "email",
        "is_staff",
    )
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "email",
                    "username",
                    "firstname",
                    "lastname",
                    "password"
                )
            },
        ),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
        ("Personal", {"fields": ("about",)}),
    )
    formfield_overrides = {
        models.TextField: {"widget": Textarea(attrs={"rows": 20, "cols": 60})},
    }
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "email",
                    "firstname",
                    "lastname",
                    "password1",
                    "password2",
                    "is_active",
                    "is_staff",
                ),
            },
        ),
    )


admin.site.register(CustomUser, UserAdminConfig)
