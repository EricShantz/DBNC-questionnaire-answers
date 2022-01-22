/*
  The most important way I would improve this code is by not storing a user's data and access 
  token local storage as this is bad practice and introduces some serious security issues (E.g. Cross Site Scripting Attacks)
  Rather than save it in local storage, it's a better idea to store access tokens in non-persisting memory, such as cookies.
  Cookies are a better option as they have security flags that protect against XSS and CSRF attacks.
  Thankfully React does some of the work escaping/encoding untrusted data for us, however it's always best to add redundant security.
  I also noticed there is a missing curly bracket in  the code block.
 */


  //code taken directly from google doc
const useAuthProvide = () => {
  const [tenantId, setTenantId] = useState(
    window.localStorage.getItem('tenantId'),
  );

  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

  const [accessToken, setAccessToken] = useState(
    window.localStorage.getItem('access_token'),
  );
  const history = useHistory();
  const userLogin = async (
    email: string,
    password: string,
    redirectPath: string,
  ) => {
    try {
      const response = await axios({
        method: 'post',
        url: `https://domain.com/api/login`,
        data: {
          email,
          password,
        },
      });
      if (response.data) {
        console.log(JSON.stringify(response.data, null, 2));
        if (response.data.type !== 'tenant') {
          alert('Unauthorized User');
        } else {
          window.localStorage.setItem('userId', response.data.userId);
          setUserId(response.data.userId);
          window.localStorage.setItem('tenantId', response.data.tenantId);
          setTenantId(response.data.tenantId);
          console.log('tenantId:' + tenantId);
          window.localStorage.setItem(
            'access_token',
            response.data.accessToken,
          );
          setAccessToken(response.data.accessToken);
          history.push(redirectPath);
        }
      }
    } catch (e) {
      alert('Error Happened');
    }
  }
;
