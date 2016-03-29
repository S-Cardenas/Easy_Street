Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :properties, only: [:index, :create]
    resources :boroughs, only: [:index]
  end
end
