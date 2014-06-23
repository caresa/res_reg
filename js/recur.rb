module FizzBuzz

  def fizzBuzz num
    if num % 3 == 0 && num % 5 == 0
      p "fizzBuzz"
    elsif num % 3 == 0
      p "fizz"
    elsif num % 5 == 0
      p "Buzz"
    else
      p num
    end
  end
end

# def fizzbuzz(n)
#   fizzbuzz(n-1) if n>1
#   p n unless fizz(n)
#   p "\n"
# end

# def fizz(n)
#   p "fizz" if n%3 == 0
#   buzz(n) || n%3 ==0
# end

# def buzz(n)
#   p "buzz" if n%5 == 0
#   n % 5 == 0
# end
