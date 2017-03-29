# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )

def lines
  {
  :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],         #=>!!!!!!!!!!!!!!
  :l => ["8th", "6th", "Union Square", "3rd", "1st"],
  :sixth => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
end

def plan_trip(start_line, start_station, end_line, end_station)

trip = []                                                         # trip array for stations!

  if start_line == end_line                                       #need find out if trip on same line
    dep_station = lines[start_line].index(start_station)          #finding start_station and index
    arr_station = lines[end_line].index(end_station)              ##finding end_station and index

    lines[start_line][dep_station..arr_station].each do |station|
      trip.push('station')                #arr = [1, 2, 3, 4] arr.push(5)  #or trip << ('station')
    end

# dep_station < arr_station ? lines[start_line][dep_station..arr_station : lines[start_line][arr_station..dep_station].reverse

      if dep_station > arr_station
        lines[start_line][arr_station..dep_station].reverse.each do |station|
          trip.push('station')
        end
      end
  end
  #
  #
  # else
  #
  #   trip2 = []
  #
  #   dep_station = lines[start_line].index(start_station)
  #   arr_station = lines[start_line].index("Union Square")
  #
  #   lines[start_line][dep_station.."Union Square"].each do |station|
  #     trip.push('station')
  #   end
  #
  #     if dep_station > "Union Square"
  #       lines[start_line]["Union Square"..arr_station].reverse.each do |station|
  #         trip.push('station')
  #       end
  #     end
  #
  #   dep_station = lines[end_line].index("Union Square")
  #   arr_station = lines[end_line].index(end_station)
  #
  #   lines[end_line]["Union Square"..arr_station].each do |station|
  #     trip2.push('station')
  #   end
  #
  #     if "Union Square" > "Union Square"
  #       lines[end_line]["Union Square"..dep_station].reverse.each do |station|
  #         trip2.push('station')
  #       end
  #     end
  #
  # end
end

# puts plan_trip( :n, 'Times Square', :n, '8th' )
puts plan_trip( :n, '8th', :n, '34th' )
# puts plan_trip( :n, 'Times Square', :l, '3rd' )     #®error line 48!!!
