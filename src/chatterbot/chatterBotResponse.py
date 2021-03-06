from chatterbot import ChatBot
import random
import sys

chatbot = ChatBot(
    "ToAm Bot",
    database='db.sqlite3',
    read_only = True,
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'statement_comparison_function': 'chatterbot.comparisons.levenshtein_distance',
            'maximum_similarity_threshold': 0.9,
            'default_response': "default_response"
        }
    ],
)

def getChatBotResponse():
    # answer text or function name
    if sys.argv and sys.argv[1]:
        response = chatbot.get_response(sys.argv[1])
        responseText = str(response)
        if (responseText == 'default_response'):
            responseText = random.choice([
                "(giThe) em bó tay",
                "(caiGiThe) hỏi khó quá",
                "(lay) cái này em không biết",
                "(leuleu) em chịu thôi",
            ])
    print(responseText)

    # answer text if it is function _@function
    if ('_@function' in responseText):
        response = chatbot.get_response(responseText)
        responseText = str(response)
        if (responseText == 'default_response'): responseText = '';
        print(responseText)

# tringger
getChatBotResponse()
