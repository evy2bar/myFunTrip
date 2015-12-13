class ResultsController < ApplicationController
	# before_action :authenticate_user!, only: []

	def maps
		authenticate_user!

		render 'maps'
	end


end
