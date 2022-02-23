from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)

class Role(models.Model):
    """
    The Role entries are managed by the system,
    automatically created via a Django data migration.
    """

    STUDENT = 1
    TEACHER = 2
    SECRETARY = 3
    SUPERVISOR = 4
    ADMIN = 5
    ROLE_CHOICES = (
        (STUDENT, "student"),
        (TEACHER, "teacher"),
        (SECRETARY, "secretary"),
        (SUPERVISOR, "supervisor"),
        (ADMIN, "admin"),
    )

    id = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, primary_key=True)

    def __str__(self):
        return self.get_id_display()


# create custom super user
class CustomUserManager(BaseUserManager):
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        return self.create_user(
            email=email, username=username, password=password, **other_fields
        )

    def create_user(self, email, username, password, **other_fields):
        email = self.normalize_email(email)

        user = self.model(email=email, username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user


# create normal user
class CustomUser(AbstractBaseUser, PermissionsMixin):
    avatar = models.ImageField(
        upload_to="user/avatar",
        null=True,
        blank=True,
    )
    email = models.EmailField(gettext_lazy("email address"), unique=True)
    # max 150 for username
    username = models.CharField(max_length=50, unique=True)
    firstname = models.CharField(max_length=50, blank=True)
    lastname = models.CharField(max_length=50, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(gettext_lazy("about"), max_length=800, blank=True)
    # roles = models.ManyToManyField(Role)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    # modify default field to email
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username
