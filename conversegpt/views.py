import os
import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_KEY", None)

class MyAPIView(APIView):
    def get(self, request):
        if api_key:
            return Response("GET request successful")
        else:
            return Response("API key not found.", status=500)

    def post(self, request):
        if api_key:
            openai.api_key = api_key
            user_input = request.data.get('userInput')
            prompt = user_input
            
            response = openai.Completion.create(
                 engine='text-davinci-003',
                 prompt=prompt,
                 max_tokens=1400,
                 temperature=0.8,
            )
            chatbot_response = response["choices"][0]["text"]
            return Response(chatbot_response)
        else:
            return Response("API key not found.", status=500)