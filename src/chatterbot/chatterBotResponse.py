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
    response = random.choice([
        "(githe2) em bó tay",
        "(caigithe2) hỏi khó quá",
        "(lay3) cái này em không biết",
        "(leuleu2) em chịu thôi",
    ])
    if sys.argv and sys.argv[1]:
        response = chatbot.get_response(sys.argv[1])

    print(response)

# tringger
getChatBotResponse()
