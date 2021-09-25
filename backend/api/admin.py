from django.contrib import admin
from .models import Post

# Register your models here.
# admin.site.register(Post)

# custom registration
@admin.register(Post)
class PostModel(admin.ModelAdmin):
    # list out filters on right panel
    list_filter = ("title", "description", "date", "owner_id")

    # show display as well
    list_display = ("title", "description", "date", "owner_id")
