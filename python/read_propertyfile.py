def getConfig():
  config = {}
  with open('../config.prop', 'r') as f:
    for line in f:
      line = line.rstrip()

      if "=" not in line:
        continue #skip comments

      k,v = line.split("=",1)
      config[k] = v
  return config

