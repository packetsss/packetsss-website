from django.contrib import admin

from .models import Post


# custom registration
@admin.register(Post)
class PostModel(admin.ModelAdmin):
    # list out filters on right panel
    list_filter = ("title", "author", "date", "slug", "author_name")

    # show display as well
    list_display = ("title", "author", "date", "slug", "author_name")
