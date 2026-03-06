export const SignInModal = (page) => ({
  get emailInput() { return page.getByRole('textbox', { name: 'Email address or username' }); },
  get passwordInput() { return page.getByPlaceholder('Enter your password'); },
  get continueBtn() { return page.getByRole('button', { name: 'Continue', exact: true }); },
  
  // 
  get headings() {
    return {
      signIn: page.getByRole('heading', { name: 'Sign in to StoryCo' }),
      storyCoVo: page.getByRole('heading', { name: 'StoryCo VO' }),
      sessions: page.getByRole('heading', { name: 'Recording Sessions' })
    };
  }
});

// 
module.exports = { SignInModal };