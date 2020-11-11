from http.server import BaseHTTPRequestHandler
from datetime import datetime
import prosodic
import logging
import json


class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        print(prosodic.config)
        prosodic.config['print_to_screen'] = 0
        prosodic.config['en_TTS_cache'] = True

        processedLines = []

        '''
        lines = json.loads(post_data)['lines']
        text = prosodic.Text(lines)
        text.parse()
        
        for line in text.lines():
            processedLines.append(
                {
                    'words': [{'word': str(word.token), 'stress': [*word.stress]} for word in line.words()],
                    'noOfSyllables': len(line.syllables())
                }
            )
        '''

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({
            "status": 200,
            "lines": processedLines
        }).encode('utf-8'))

        return
