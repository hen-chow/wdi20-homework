input = -1
while input != "q"       #!!!!!!!!!!!!!!

  puts "Please choose from following programs:"
  puts "1. add"
  puts "2. substract"
  puts "3. multiply"
  puts "4. divide"
  puts "5. square"
  puts "6. exponent"
  puts "q. quit"

  input = gets.chomp

  def number1
    puts "Choose your first number"
    gets.chomp.to_i
  end

  def number2
    puts "Choose your second number"
    gets.chomp.to_i
  end

  def exponent
    puts "Choose your exponent"
    gets.chomp.to_i
  end

  case input
  when "1"
    result = number1 + number2
    puts "******"
    puts result
    puts "******"
  when "2"
    result = number1 - number2
    puts "******"
    puts result
    puts "******"
  when "3"
    result = number1 * number2
    puts "******"
    puts result
    puts "******"
  when "4"
    result = number1 / number2
    puts "******"
    puts result
    puts "******"
  when "5"
    result = Math.sqrt(number1)
    puts "******"
    puts result
    puts "******"
  when "6"
    result = (number1) * exponent
    puts "******"
    puts result
    puts "******"
  when "q"
    break
  else
    puts "Invalid input, try again!"
  end
end
