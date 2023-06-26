from django.db import models


class Prompt(models.Model):
    prompt_text = models.CharField(max_length=255)

class Result(models.Model):
    prompt = models.ForeignKey(Prompt, on_delete=models.CASCADE)
    result_text = models.TextField()