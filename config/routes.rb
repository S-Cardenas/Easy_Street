Rails.application.routes.draw do
  root to: "static_pages#root"

	resource :users, only: [:new, :create, :edit, :update]

  namespace :api, defaults: {format: :json} do
    resources :properties, only: [:index, :create, :show]
    resources :boroughs, only: [:index]
		resource :session, only: [:show, :create, :destroy]
		resources :users, only: [:new, :create]
  end
end
