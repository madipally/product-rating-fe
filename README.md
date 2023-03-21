# README

This is the front end application for listing the products and rating a product.

Please follow below steps in order to configure.

1. Clone this repository

2. Change to this application using 'cd product-rating-fe' command

3. Install the webpacker by running 'bundle exec rake webpacker:install' command at root folder of the application

4. Add jquery by running 'yarn add jquery' command at root folder of the application

5. replace the content of the 'config/webpack/environment.js' with below statements using your favourite editor

        const { environment } = require('@rails/webpacker')
			  const webpack = require('webpack')
			  environment.plugins.prepend('Provide',
				  new webpack.ProvidePlugin({
				    $: 'jquery/src/jquery',
				    jQuery: 'jquery/src/jquery'
				  })
				)
			  module.exports = environment
        
 6. Run the rails server with 'rails s -p 3001' command in order to run at 3001 port
