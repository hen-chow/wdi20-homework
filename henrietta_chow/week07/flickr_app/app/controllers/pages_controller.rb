class PagesController < ApplicationController

  COLOURS_CONST = {
    "red": 0,
    "orange": 2,
    "yellow": 4,
    "pink": "a",
    "green": 5,
    "cyan": 7,
    "blue": 8,
    "violet": 9,
    "black": "e",
    "white": "c"
  }

  def index
    @colours = COLOURS_CONST
  end
end
