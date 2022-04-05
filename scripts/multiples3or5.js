def solution(number)
 (1..number-1).map { |n| n.to_i if (n % 5 == 0 || n % 3 == 0)}.compact.inject(0, :+)
end