Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :products, only: [:index, :create, :show, :destroy, :update]
 resources :offices, only: [:index]

 post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # get "/users", to: "users#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end
