Feature: Registration form feature
    Fill out an individual registration form...

Scenario: Access the customer registration page and fill out the customer registration type individual
    Given I go on the home page
    When I access the identification link
    And Fill the new user text box/ email text box with email generator
    And I click the registration button
    Then Registration screen should be displayed
    And I check if it is an email text box is pre-populated
    And Fill in the confirmation email text box with the same registration email
    Then The email text box completion must be the same as confirmation email text box
    And Fill in the password text box with "123456"
    And Fill in the confirmation password text box with "123456"
    And I click the type of register button : Type Individual
    And Fill in the full name text box with "Test Test"
    And Fill in the cpf text box with cpf generator
    And Fill in the cell phone number text box with "11999999999"
    And Fill in the phone number text box with "1199999999"
    And I select the male gender in the options
    And Fill in the birth date text box with "01011980"
    And Fill in the zip code text box with "04578-907"
    And I close the address popup alert popup
    And Fill in the address text box with "Avenida das Nações Unidas"
    And Fill in the address number text box with "11541"
    And Fill in the complement text box with "Terceiro Andar"
    And Fill in the reference text box with "Teste"
    And I check if the district text box was filled
    And I check if the city text box was filled
    And I check the state text box was filled
    And I click the create account button
    Then Account confirmation message created should be displayed