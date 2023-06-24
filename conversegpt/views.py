import os
import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from dotenv import load_dotenv
# Create your views here.

load_dotenv()

api_key = os.getenv("OPENAI_KEY", None)



class MyAPIView(APIView):
    def get(self, request):
        if api_key:
            # Perform your logic for GET request
            return Response("GET request successful")  # Return a valid Response object
        else:
            return Response("API key not found.", status=500)

    def post(self, request):
        if api_key:
            # Perform your logic for POST request
            openai.api_key = api_key
            user_input = request.POST.get('user_input')
            prompt = user_input
            
            response = openai.Completion.create(
                 engine = 'text-davinci-003',
                 prompt = "can you tell me how to make you using django rest framework",
                 max_tokens=400,
                 temperature = 0.8,
            )
            chatbot_response = response["choices"][0]["text"]
            return Response(chatbot_response)  # Return a valid Response object
        else:
            return Response("API key not found.", status=500)


