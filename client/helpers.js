
// Forms. 
const cssSelectorForm = `
  <form action=handleContactForm()></form>
    <fieldset  id="contact-info">
      <legend>CSS Selector</legend><br>

        <label>Font Family<br>
        <input type="text" name="fontFamily" placeholder="Font Family"></label><br><br>											
        <label>H1 Color<br>
        <input type="text" name="h1 color" placeholder="H1 Color"></label><br><br>
        <br>
        <div id="color">
          <label>Text Color<br>
            <input style="display:inline-block" type="color" name="color" placeholder="Text Color">
          </label><br><br>
        </div>
        <div id="backgroundColor">
          <label>Background Color<br>
          <input style="display:inline-block" type="color" name="background-color" placeholder= "Background Color"></label><br><br>
        </div>
        <input class="button" type="submit" value="Submit">						
    </fieldset>
    </form>`

const linksContent = `
  <h2>Useful Links</h2>
  <p>
    These are some links that I found useful. 
  </p>
  <ol>
    <li>
    Often when developing you need data to test your rest calls. Creating your own mock data can be a real pain. Check out this git repository and run a <a href="https://github.com/typicode/json-server" alt="link to a json server">json server</a> to make API development easier. While you are there, open a free account. Github is a code repository you can keep code you want to share or just to memorialize your work. You can also use github pages to deploy your code. Worth checking out. (They also use AWS s3 for storage.)
  </li>
    <li>
      Awesome for me, since css is like getting teeth pulled. <a href="https://purecss.io/menus/" target="_blank" title="Pure CSS">PureCSS</a>
    </li>
    <li> 
      I have heard it said, <a href="https://www.npmjs.org/" target="_blank">NPM</a> is god.. I agree. An extensive library of all sorts of development tools, starter kits and lots of time saving utilities. You can also sign up for a free account and store your own NPM packages for easy access or to share with the community.
    </li>
    <li>
        <a href="https://vuejs.org/" target="_blank">Vue.js</a> is a real promising framework for writing dynamic apps without jquery. There is an argument going on, that you shouldn't put javascript in your html. There might have been a time when that was true. But, the less code you need to write, the faster you get the job done. 
    </li>
    <li>
    I had to add this framework,<a href="https://rxjs-dev.firebaseapp.com/guide/overview" target="_blank">Rx.js</a>, having just discovered it. At first look, it seems they integrate<a href="https://www.websocket.org/" title=" WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web IDL is being standardized by the W3C. WebSocket is a different protocol from HTTP">Websockets</a> into the framework. That would be really cool. Looks like my intersession is booked.
    </li>
  </ol>`

const video = ` 
  <p><img src="../images/vue.png" class="left" />
  <cite>
  Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.    
  </cite>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/m1_ih43p24s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

const sidebarRight = `
  <ul> Project Requirements<br>
    <li>Headings on pages</li>
    <li>Some sectioning tags (header, footer, section, article, div, nav, aside)</li>
    <li>Links to navigate through your web site</li>
    <li>Lists (unordered. ordered and/or definition lists)</li>
    <li>Images and some image styles</li>
    <li>Use of color – different font color and background color/image</li>
    <li>Use of different font and text styles</li>
    <li>Table(s) – table to display information in tabular form</li>
    <li>CSS used for page layout</li>
    <li>Form(s)</li>
    <li>An external style sheet, some embedded styles, some inline styles</li>
    <li>Some multimedia element</li>
    <li>Use some features to enhance accessibility </li>
    <li>Publish your pages to the web.</li>
    <li>Create a separate folder for your images </li>
    <li>Name your home page, index.html</li>  
  </ul>`
const signUpForm = `
  <em>If it is your first time, you are automatically registered and the welcome message will follow or a welcome back. The signup in the upper right should show your login status.</em><br><br>
        <form action="http://webdev.marxcloud.com" method="post"></form>
          <fieldset  id="signInForm">
            <legend>Sign In</legend><br>
              Fields marked * required.<br><br>

              <label>Email<br>
              <input type="email" name="login" placeholder="user@email.com"></label><br><br>											
              <label>Password<br>
              <input type="password" name="login" placeholder="Password"></label><br><br>
              
              <input class="button" id="login" type="submit" value="Submit">
            </div>						
          </fieldset>
          </form>`
const contactForm = `
  <form action=handleContactForm()></form>
    <fieldset  id="contact-info">
      <legend>Contact</legend><br>
        Fields marked * required.<br><br>

        <label>First name *<br>
        <input type="text" name="firstname" placeholder="First Name"></label><br><br>											
        <label>Last name *<br>
        <input type="text" name="lastname" placeholder="Last Name"></label><br><br>
        <br>
        <div id="contactEmail">
          <label>Email *<br>
            <input style="display:inline-block" type="email" name="email" placeholder="Email Address">
          </label><br><br>
        </div>
        <div id="contactPhone">
          <label>SMS confirmation<br>
          <input style="display:inline-block" type="tel" name="sms" placeholder= "Phone Number"></label><br><br>
        </div>
        
        <input class="button" type="submit" value="Submit">						
    </fieldset>
    </form>`

const subscribeForm = `
  <form action=handleContactForm()></form>
    <fieldset  id="subscribe-info">
      <legend>Subscribe</legend><br>
        Fields marked * required.<br><br>

        <label>First name<br>
        <input type="text" name="firstname" placeholder="First Name"></label><br><br>											
        <label>Last name<br>
        <input type="text" name="lastname" placeholder="Last Name"></label><br><br>

        <label>Email *<br>
          <input type="text" name="email" placeholder="Email Address"></label><br><br>

        <label>Choose Subscription Type<br><br>        
        <input type="radio" name = "subscription">Free
        <input type="radio" name = "subscription">Cheap
        <input type="radio" name = "subscription">First Born
        </label><br><br>
        
        <input class="button" type="submit" value="Submit">
      </div>						
    </fieldset>
  </form>`

// Create the Page content 
const sidebarLeft = ``
const mainContent = `
  <h1 id="h1Main">Node - Express - Vue - AWS</h1>
  <h2>Simplicity</h2>
  <p>
    As a freelancer time management is essential. Using Node, Express, AWS and Vue.js, provides us with a development and deployment stack you can manage single handedly, using free or very close to free services. 
  </p>
  <dl>
    <dt>
      Node
    <dd>
    Node.js<sup>&reg;</sup> is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world
    </dd>
    </dt>
  </dl>
  <p>
  Using Node for the back end, javascript and vue.js for delivery of content, and of course html and css for aesthetics. This reduces the learning curve. if I can use the same language for both, and not worry about confusing two different syntax's. Of course this also depends on the type of apps you build, wether or not you work for an organization or as a freelancer.  
    The source code for the project is located <a href="http://www.github.com/marxtrader/finalProject.git">here</a> Note there are two versions. Static and Node. Static is deployed to Amazon s3 and Node can be run locally or deployed to a ec2 instance. The Node version allows you to test your get and post requests and control what is returned to the requester. 
  </p> 
  <p>
    Here is a post regarding the discussion. But in a nutshell, the cons of using Node can be overcome with money. In my opinion, when you do a cost benefit, the increased cost of deploying your app on a beefier machine would be infinitesimal compared to the decrease in development time and hence speed to market. So unless your solution is tied to a program like Word press, Node Wins. See a comparison <a href='https://www.netguru.co/blog/nodejs-vs-php'><em>here</em></a>
  </p>

  <p> 
    while there are many integrated development environments out there, I use VS Code. It is Free and there are thousands of extensions available for code highlighting, code completion and handy development tools. It also has a integrated terminal window for execution on the command line. (which you will often refer too, to view logs or to restart applications.)
  </p>
  
  <dl> 
    <dt>1. Install Node</dt>
    <dd> Head on over to <em><a href="https://nodejs.org/en/">nodejs.org</a></em> and download an install package.</dd>

    <dt>2. Install NVM </dt>
    <dd>Node Version Manager, or NVM, allows you to switch versions of node on the fly. This is very handy for developers. Some environments don't support all the versions of node. For example, As of a couple of months ago, AWS lambda could only run version 8.2 while the current version is 11.4 <a href="https://danielarancibia.wordpress.com/2017/03/28/install-or-upgrade-nodejs-with-nvm-for-windows/">HERE</a> is a link to a tutorial about NVM.</dd>

    <dt> 3. Navigate to the directory you downloaded the files too. </dt>
    <dd>
      open the integrated terminal by typing Crl-'\`' (backtick)<br>At the command prompt type 'npm install'  
    </dd>
    <dt>4. Last but not least</dt>
    <dd>
      There is only one more step before we launch the app. Look at the contents of the package.JSON file and locate the "scripts" section.
      <ul>
        <code>
          <li>"scripts": {</li>
          <li>"start": " npx pm2 start app.js --watch",<li>
          <li>"test": "node tests/test.js"</blockquote></li>
        </code>
      </ul>

      What this is saying is when you type 'node start' on the command line, under the <a href="https://www.npmjs.com/package/pm2">pm2 process manager</a> run app.js and watch for changes to files. If there are changes, redeploy the application. Also, make sure it is always running. If it crashes, restart the app.
    </dd>
  </dl>
  <h2>Start your engines!</h2>
    <p>
      Type node start, hit enter. then with your browser , point to localhost:3000 and the site is displayed. Since we are running on localhost, a proxy server isn't needed for routing. However, in a production environment, you don't want your customers to have to add the port number 3000, to the url. Take a peek at config/config to see where the port is set.   
    </p>
    <p> 
      your console window should now be logging web server activity and access to your sites resources. 304 is good, 404 is bad, very bad. a 500 means there is something amiss in your javascript code. 
    </p><br><br>
  `

const jqueryContent = `
    <p><img src="images/jquery.png" class="left"><cite>jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, animation, and Ajax. It is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin.</cite> - Wikipedia</p>
    <!DOCTYPE html>
  <html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/grid.css">
  </head>
  <body>
    <h1 id="Heading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button class="button" id="showHide">Hide list</button>
    <div class="lst">
      <p class="desc">List Items</p>
      <input type="text" class="desc">
      <button class="desc">Change description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItem">
      <button class="addButton button">Add item</button>
    </div>
    <script src="app.js"></script>
  </body>
 </html>`
const expressContent = `
    <p><img src="images/express-js.png" class="left express"><cite>Express.js,   or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. - wikipedia</cite></p>
    <h5>This is a video for using pug, but it also includes setting up the express web server. Pug itself is a HTML template engine which lets you write much less html (no closing tags :)</h5> <iframe width="560" height="315" src="https://www.youtube.com/embed/kt3cEjjkCZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 

const awsContent = `
    <p>
      <img src="images/aws.png" class="left">
      <cite>
        Amazon Web Services is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis. The technology allows subscribers to have at their disposal a virtual cluster of computers, available all the time, through the Internet.
      </cite>
    </p> 
      <dl>
        <p>This project used several services offered by AWS. All AWS services are available in a command line interface, CLI and in a software development kit or SDK. This lets us write javascript to interact with the cloud and the resources we use. It is worth the effort to go through a tutorial relating to the AWS Cloud.</p>

        <dt>s3</dt>
          <dd>
            <p>
              Amazon S3 or Amazon Simple Storage Service is a "simple storage service" offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network and Drop Box uses for their business.
            </p>
            <p>
              For development we use node and express to run our web server, however, since the site is static we can host it on s3 and point our url (in this case, static.chrisranni.com, to our s3 bucket. Guaranteed 100% uptime for our site.  <em><span style="font-size:1.2em; color:darkblue; font-weight:bold">Serverless!<span></em>
            </p>
          </dd><br>
          <dt>ec2</dt>
          <dd>
            <p>
              Amazon Elastic Compute Cloud forms a central part of Amazon.com's cloud-computing platform, Amazon Web Services, by allowing users to rent virtual computers on which to run their own computer applications.
            </p>
            <p>
                Running the infrastructure on an ec2 instance is beyond the scope of this project. It is an involved processes that requires a bit of time to create and then to install and configure the needed software, setting permissions and finally forwarding requests through our proxy. 
          </dd><br>
          <dt>route53</dt>
            <dd>
              Amazon Route 53 is a scalable and highly available Domain Name System. Released on December 5, 2010 , it is part of Amazon.com's cloud computing platform, Amazon Web Services. The name is a reference to TCP or UDP port 53, where DNS server requests are addressed.
            </dd>
      </dl>`

const vueContent = `
    <p><img src="images/vue.png" class="left" />
    <cite>
      Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.    
    </cite> 
    </p>
    <p>
      Vue uses an HTML-based template syntax that allows binding the rendered DOM to the underlying Vue instances data. All Vue templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers. Under the hood, Vue compiles the templates into virtual DOM render functions. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
    </p>
    <div style="margin:auto">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/m1_ih43p24s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `
const footerContent = `
    <address>
    Copyright 2018 chrisranni.com&copy; <a href="mailto:cranni@sunyrockland.edu">cranni@sunyrockland.edu</a> 156 Hudson Terrace, Piermont, NY 10968<br> 
    </address>`
const projects = `
<ul>
    <li>
        <a href="https://www.amazon.com/Chris-Ranni-Marx-Trader/dp/B07CRPPKT5/ref=sr_1_1?s=electronics&ie=UTF8&qid=1544731804&sr=8-1&keywords=Marx+Trader+Alexa+Skill">Marx Trader</a> is an Alexa Skill that reports the current price of a number of crypto instruments published on Bitfinex.com. It uses the ASK cli to build and deploy the skill to AWS Lambda, uses the dynamoDB to save state, and makes REST calls to the bitfinex public api endpoints. If you want the source, contact me. I would need to help you create your own credentials for this to work. 
    </li>
</ul>
`
// create references to the elements we need to create the event listeners.
// an easier way, is to attach the listener to the parent element, which in this case is a ul. 
// instead We can do the following:
// const refUl = document.querySelector('#one ul);
// then we can pass in the event object when we create a listener.
// reUl.addEventListener('click', (event) => {}
// then within the brackets we can identify which button was clicked using:
// event.target This is called bubbling up. Look into it. :) 

const homeButton = document.querySelector('button.home')
const vueButton = document.querySelector('button.vue')
const awsButton = document.querySelector('button.aws')
const styleButton = document.querySelector('button.style')
const linkButton = document.querySelector('button.links')
const signIn = document.querySelector('#signIn')

// insert initial page content on load 

  document.querySelector('#three').innerHTML = contactForm;
  document.querySelector('#two').innerHTML = mainContent;
  document.querySelector('#five').innerHTML=footerContent;

// Event Listeners/Handlers

  // () =>  is the same as function()
  signIn.addEventListener('click', () => {

    // when the signIn button is clicked load the form into div#two
    // note: the selector follows CSS naming conventions so .div for classes # for id's.
  
    document.querySelector('#two').innerHTML = signUpForm;
  })

  // you can also use textContent instead of innerHTML but, it will render it as text. 
  // example. element.innerHTML = "<h1>Title</h1>" will render what you expect
  // element.textContent = "<h1>Title</h1>", will render that exact string in the document.
  homeButton.addEventListener('click',() => {
    document.querySelector('#two').innerHTML = mainContent;
    document.querySelector('#three').innerHTML = contactForm
  })

  vueButton.addEventListener('click', () => {
    document.querySelector('#two').innerHTML = vueContent;
    document.querySelector('#three').innerHTML = subscribeForm
  });

  awsButton.addEventListener('click', () => {
    document.querySelector('#two').innerHTML = awsContent;
    document.querySelector('#three').innerHTML = contactForm
  });

  // You can manipulate styles either by directly changing the properties or
  // you can change the class which saves a bit of typing if you are, say, creating 
  // skins for the apps. I didn't use them, but the syntax is
  // document.getElementById(')

  styleButton.addEventListener('click', () => {
    document.querySelector('#three').innerHTML = cssSelectorForm
    docBody = document.getElementsByTagName('body')[0] 
    //by tag name returns all elements with the same tag, so is a collection. Since I know there is only one, I use the [0] index.
    
    if (docBody.style.color == 'limegreen') {
      docBody.style.backgroundColor='#eaeab5';
      docBody.style.color='black'
      docBody.style.fontFamily='Ariel'
      docBody.style.fontWeight = 'regular'
      const h1List = document.querySelectorAll('h1');
      if (h1List.length > 0) {
        for (var i=0;i< h1List.length;i++) {
          h1List[i].style.color="darkgreen"
        }
      }
      const h2List = document.querySelectorAll('h2');
      if (h2List.length > 0) {
        for (var i=0;i< h2List.length;i++) {
          h2List[i].style.color="orangered"
        }
      }

    } else {
      docBody.style.backgroundColor="darkred"
      docBody.style.color='limegreen'
      docBody.style.fontFamily='Ariel'
      docBody.style.fontWeight = 'regular'

      const h1List = document.querySelectorAll('h1');
      if (h1List.length > 0) {
        for (var i=0;i< h1List.length;i++) {
          h1List[i].style.color="red"
        }
      }
      const h2List = document.querySelectorAll('h2');
      if (h2List.length > 0) {
        for (var i=0;i< h2List.length;i++) {
          h2List[i].style.color="white"
        }
      }
    }
  })

  linkButton.addEventListener('click', () => {
    document.querySelector('#two').innerHTML = linksContent;
    document.querySelector('#three').innerHTML = projects;
  })

