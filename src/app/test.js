starting_stack_size = 11
max_stable_height = 2
partition = 2

stack = 0

def answer(stack_size):
  global stack
  print "answer"
  if stack_size > max_stable_height:
    if stack_size%partition==0:
      height = stack_size/partition
      print ("even height", height)
      answer(height)
    else:
      smaller_height = stack_size/partition
      bigger_height = smaller_height + 1
      print ("odd height", smaller_height, bigger_height)
      answer(smaller_height)
      answer(bigger_height)
    stack += partition
  return stack

print answer(starting_stack_size)
