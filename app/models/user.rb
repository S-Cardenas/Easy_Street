class User < ActiveRecord::Base
	validates :username, :password_digest, :session_token, presence: true
	validates :password, length: { minimum: 6, allow_nil: true }

	attr_reader :password

	has_many :properties,
		class_name: "Property",
		priimary_key: :id,
		foreign_key: :author_id

	has_many :bookmarks,
		class_name: "Bookmark",
		primary_key: :id,
		foreign_key: :user_id


	after_initialize :ensure_session_token

	def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  protected
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end


end
