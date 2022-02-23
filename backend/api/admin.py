from django.contrib import admin

from .models import Post

# custom registration
@admin.register(Post)
class PostModel(admin.ModelAdmin):
    ordering = ("-date",)
    search_fields = ("title", "content", "author", "date", "slug")

    # list out filters on right panel
    list_filter = ("author", "date")

    # show display as well
    list_display = ("short_title", "short_author", "short_date", "short_slug")
    
    def title(self, obj):
        return obj.title[:10]
