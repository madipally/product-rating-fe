class ProductsController < ApplicationController
    def index
        response = RestClient.get('http://localhost:3000/api/v1/products')
        @products = JSON.parse(response.body)
      end
end