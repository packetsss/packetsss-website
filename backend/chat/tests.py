import json
from PIL import Image
from six import BytesIO
from rest_framework.test import APITestCase
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import SimpleUploadedFile


def create_image(
    storage, filename, size=(100, 100), image_mode="RGB", image_format="PNG"
):
    data = BytesIO()
    Image.new(image_mode, size).save(data, image_format)
    data.seek(0)
    if not storage:
        return data
    image_file = ContentFile(data.read())
    return storage.save(filename, image_file)

###--- NOT WORKING!!! ---###
class TestFileUpload(APITestCase):
    file_upload_url = "/chat/file-upload"

    def test_file_upload(self):
        
        avatar = create_image(None, "avatar.png")
        avatar_file = SimpleUploadedFile("front.png", avatar.getvalue(), "application/json")
        data = {"file_upload": avatar_file}
        print(self.file_upload_url, type(avatar_file), self.client)

        # processing
        response = self.client.post(self.file_upload_url, data=data)
        print(response)
        result = response.json()

        # assertions
        self.assertEqual(response.status_code, 201)
        self.assertEqual(result["id"], 1)

