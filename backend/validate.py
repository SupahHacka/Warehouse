class valid:

  def __init__(self, dictionary):
    for a, b in dictionary.items():
      setattr(self, a, b)

  def checkEmpty(self, *args):
    for data in args:
      if data != '':
        return True
      else:
        return False

if __name__ == '__main__':
  dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
  valid = valid(dict);
  print(valid.Name);