class valid:

  def __init__(self, dictionary):
    for a, b in dictionary.items():
      setattr(self, a, b)

  def checkEmpty(self, data=None):
    if data != '':
      return True
    else:
      return False

class logUser(valid):
  def __init__(self, dictionary):
    super().__init__(dictionary)

  def checkEmpty(self, data):
    return super().checkEmpty(data)

if __name__ == '__main__':
  dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
  valid = valid(dict);
  print(valid.Name);