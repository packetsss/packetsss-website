from django.contrib import admin
from .models import Article

# Register your models here.
# admin.site.register(Article)

# custom registration
@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    # list out filters on right panel
    list_filter = ("title", "description")

    # show display as well
    list_display = ("title", "description")
