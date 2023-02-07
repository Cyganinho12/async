{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [
    {
     "ename": "SyntaxError",
     "evalue": "invalid syntax (Temp/ipykernel_9412/2247018430.py, line 1)",
     "output_type": "error",
     "traceback": [
      "\u001b[1;36m  File \u001b[1;32m\"C:\\Users\\Maciej\\AppData\\Local\\Temp/ipykernel_9412/2247018430.py\"\u001b[1;36m, line \u001b[1;32m1\u001b[0m\n\u001b[1;33m    json-server --watch db.json\u001b[0m\n\u001b[1;37m                         ^\u001b[0m\n\u001b[1;31mSyntaxError\u001b[0m\u001b[1;31m:\u001b[0m invalid syntax\n"
     ]
    }
   ],
   "source": [
    "async function showAvatar() {\n",
    "\n",
    "  // read our JSON\n",
    "    let response = await fetch('/article/promise-chaining/user.json');\n",
    "    let user = await response.json();\n"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.8"
  },
  "orig_nbformat": 4,
  "vscode": {
   "interpreter": {
    "hash": "ccf51b22ef9388a38ceaa0e54074962be951f8f66660bc9b8e4c80d05c72285d"
   }
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
