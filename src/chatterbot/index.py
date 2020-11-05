from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import en_core_web_sm
import os

chatterBotPath = os.path.dirname(os.path.realpath(__file__))
datasetBotPath = chatterBotPath + '/dataset'

chatbot = ChatBot(
    "ToAm Bot",
    database='db.sqlite3',
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'statement_comparison_function': 'chatterbot.comparisons.levenshtein_distance',
            'maximum_similarity_threshold': 0.9,
            'default_response': "default_response"
        }
    ],
)

trainer = ChatterBotCorpusTrainer(chatbot)

for filename in os.listdir(datasetBotPath):
	trainer.train(datasetBotPath + '/' + filename)
