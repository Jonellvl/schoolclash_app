require 'base64'

File.open('imagetob64.png', 'r') do |image_file|
  puts Base64.encode64(image_file.read)
end
