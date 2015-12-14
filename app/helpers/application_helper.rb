module ApplicationHelper
  def not_sign_in_or_up
    !( current_page?(:controller => "devise/sessions", :action => "new")) && !(current_page?(:controller => "devise/registrations", :action => "new") )
  end
end
