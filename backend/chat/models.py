from django.db import models


# Create your models here.
class FileUploadModel(models.Model):
    file_upload = models.FileField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.file_upload)

class MessageModel(models.Model):
    message = models.TextField(blank=True, max_length=1000)
    sender = models.ForeignKey(
        "user.CustomUser", related_name="message_sender", on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        "user.CustomUser", related_name="message_receiver", on_delete=models.CASCADE
    )
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ("-created_at",)


class ChatModel(models.Model):
    room = models.CharField(max_length=50, unique=True)

    messages = models.ManyToManyField(MessageModel, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"chatroom {self.room}"

    class Meta:
        ordering = ("-created_at",)


class MessageFileModel(models.Model):
    message = models.ForeignKey(
        MessageModel, related_name="message_attachments", on_delete=models.CASCADE
    )
    attachment = models.ForeignKey(
        FileUploadModel, related_name="message_uploads", on_delete=models.CASCADE
    )
    caption = models.CharField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("created_at",)
