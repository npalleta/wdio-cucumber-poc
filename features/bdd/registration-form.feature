Feature: Registration form feature
    Fill out an individual registration form...

Scenario: Access the customer registration page and fill out the customer registration type individual
    Given I go on the home page
    When I access the identification link
    And Fill the new user text box/ email text box with "test@test.com"
    And I click the registration button
    Then Registration screen should be displayed
    And I check if it is an email text box is pre-populated
    And Fill in the confirmation email text box with "test@test.com"
    And Fill in the password text box with "123456"
    And Fill in the confirmation password text box with "123456"
    # And I click the type of register button : Type Individual
    # And Fill in the full name text box with "Test Test"
    # And Fill in the cpf text box with "12312312300"
    # And Fill in the cell phone number text box with "11999999999"
    # And Fill in the phone number text box with "1199999999"
    # And I select the male gender in the options
    # And Fill in the birth date text box with "01011980"
    # And Fill in the zip code text box with "01234567"