import "../css/main.css";
import Fork from "../contribution_image_assets/fork.png"
import Issue from "../contribution_image_assets/issue_template.png"
import Merge from "../contribution_image_assets/pr_merge_request.png"
import Message from "../contribution_image_assets/pr_message.png"
import Notification from "../contribution_image_assets/pr_notification.png"
import Review from "../contribution_image_assets/pr_review_request.png"
import Submit from "../contribution_image_assets/pr_submit.png"


const Guidelines = () => {
  return (
    <div className="Guidelines">
      <br/>
      <h1 className="page-headline">Guidelines</h1>
      <h2 id="how-to-contribute">How to contribute</h2>
      <h3 className="sub-head1">Step 1: Fork this Project</h3>
      <p className="general-text">
        In order to contribute, your first step is to fork this project.
        Creating a <a className="special-text">fork</a> will make a copy of this
        project to your GitHub account.
        <br />
        <br />
        Just go to the main page of this project and click the fork button at
        the top-right section.
      </p>
      <img className="image" className="image" src={Fork} alt="fork-demo-image" />
      <h3 className="sub-head1">Step 2: Clone the forked repository to your system</h3>
      <p className="general-text">
        Now you need to clone the forked repository to your system and then all
        the code/docs changes that you'll make, will be in the cloned repository
        only.
      </p>
      <ol>
        <li className="general-list">Open your terminal (Command Prompt, Git Bash, Powershell)</li>
        <li className="general-list">
          Go to the directory where you want to clone your project. For example,
          Let's say you have a folder named as{" "}
          <a className="special-text">opensource</a> at the Desktop where you
          want to clone your project then your command prompt path should look
          like this.
        </li>
      </ol>
      <h4 className="sub-head2">For windows:</h4>
      <p className="code">C:\user\Desktop\opensource{">"}</p>
      <h4 className="sub-head2">For Mac (Terminal):</h4>
      <p className="code">username's-Mac:~desktop/opensource$</p>
      <h4 className="sub-head2">then write the command given below:</h4>
      <p className="code">git website(text to be added)</p>
      <h4 className="sub-head2">
        then <a>cd</a> to the project by writing
      </h4>
      <p className="code">cd eccentrictouch</p>
      <br />
      <p className="general-text">
        Congratulations! All the setup related things are done now you can go
        further :)
      </p>
      <h3 className="sub-head1"> Step 03: Issue related Things</h3>
      <h4 className="sub-head2">If you are Raising an Issue</h4>
      <p className="general-text">
        Raising issues really helps this project to grow more and have great
        usability. There are some type of issues which are listed in the
        screenshot below.
      </p>
      <img className="image" className="image" src={Issue} alt="issues-demo-image" />
      <p className="general-text">
        All the issues have pre-designed content template. If you have selected{" "}
        <a className="special-text">Bug Report</a> issue type then precisely
        explain your report or the issue you have faced. Try adding screenshots
        (if possible) for more clarification.
      </p>
      <p className="general-text">
        If you have selected <a className="special-text">Feature Request</a>{" "}
        then explain the feature in description like how it will be implemented,
        why it is required and if you want to work on that issue then write an
        assignment request also that you want to work on it. May be as a comment
        or in the issue itself and we'll get back to your request and start the
        discussion.
      </p>
      <p className="general-text">
        Other than these, you have you have community joining related issue also
        such as<a className="special-text">Community Joining Request</a>
        <a> and Project Maintainer Request</a>
      </p>


      <p className="general-text">
        You can raise an issue in order to join the community on GitHub and
        Discord. We could have directly shared the discord server link with you
        but it has expiry issues. But whenever you'll raise the joining issue,
        our team will get back to you. Also, you can be an active member at The
        DesignSystems Community on GitHub and have a logo under your profile -
        The mark of working/contributing at The DesignSystems projects.
        <br />
        <br />
        You can raise an issue also to become a Project Maintainer at The
        DesignSystems Community. Just raise your request and we'll get back to
        you and have a discussion. Easy right!?
      </p>
      <h4 className="sub-head2">If you are solving an issue</h4>
      That's great that you want to work on an issue. All the issue are listed
      at the issue tab-section with proper titles, labels and assignments. Just
      open the issue you want to work on and request an assignment in the
      comments section.
      <br />
      <br />
      Feel comfortable to ask your doubts related to that issue. Ask everything,
      whatever is in your mind, we are there to help you out.
      <br />
      <br />
      <br />
      <h3 className="sub-head1">Step 04: Coding, Making the Code Changes</h3>
      If you are doing code changes then make sure that your branch is v2.0 To
      switch from <a className="special-text">master</a> branch to{" "}
      <a className="special-text">v2.0</a>, you need to write.
      <p className="code">git checkout v2.0</p>
      <p className="general-text">
        Time for the real-work, Open your code editor and start working on that
        issue. Thoroughly go to the file structure of the project. When you are
        done with the changes, it's time to create a Pull Request.
      </p>
      <h3 className="sub-head1">Step 05: Creating a Pull Request</h3>
      <p className="general-text">Go to your terminal again, and write the commands mentioned below.</p>
      <ol>
        <li className="general-list"> First you need to add your changes to the Staging area.</li>
        <p className="code">git add {"<"}FILENAME_WHERE_YOUR_CODE_CHANGES_ARE{">"}</p>
        <p className="general-text">If you want to add everything at the time then just write</p>

        <p className="code">git add .</p>
        <p className="general-text">
          But for a good-developer practice always add files according to the
          types of changes made.
        </p>

        <li className="general-list"> Commit your code changes with a short(informative) message</li>

        <p className="code">git commit -m "{"<"}A SHORT MESSAGE /LINE EXPLAINING YOUR CODE CHANGES{">"} {"<"}ISSUE_TAG_IF_POSSIBLE{">"}"</p>
        <p className="general-text">
          for an example, you have changed the CSS Properties for the Header and
          the issue-tag was #123 then the proper way to commit your code changes
          would be.
        </p>

        <p className="code">
          git commit -m "CSS Properties for Header changed (#123)"
        </p>
        <p className="general-text">And your changes are committed!</p>
        <li className="general-list"> Push your Code Changes</li>

        <p className="code>">git push -u origin v2.0</p>
        <p className="general-text">
          Make sure that you have done your code changes on the v2.0 branch and
          push on the same branch - The v2.0 branch.
        </p>

        <p className="general-text">
          Voila! Your code changes are pushed to your forked repository. Time to
          create a PR!! ⭐
        </p>
        <li className="general-list">Go to your forked repository</li>
        <p className="general-text">
          When you will go to your forked repository, You will see a
          message/notification like this.
        </p>
      </ol>
      <img className="image" src={Notification} alt="pr-notification-demo-image" />
      <p className="general-text">
        Click of the Green Coloured
        <a className="special-text">Compare & Pull Request</a> Button`
      </p>
      <p className="general-text">
        Now after clicking the button you need to write a short but informative
        message in order to support your changes. For example, The one given
        below
      </p>
      <img className="image" src={Message} alt="commit-message-demo-image" />
      <p className="general-text">
        Also, Don't forget to request a review from our project maintainers.
        Select to at least 1-2 project maintainers to review your Pull Request.
        Just like this.
      </p>
      <img className="image" src= {Review} alt="request-review-demo-image" />
      <p className="general-text">
        All set! Submit your PR. Click the{" "}
        <a className="special-text">Create Pull Request button</a>
      </p>
      <img className="image" src={Submit} alt="submit-pull-request-demo-image" />
      <p className="general-text">
        Then wait for the checks, and the discuss the stuff if required with our
        project maintainers and after all the checks we'll merge your Pull
        Request. 😃
      </p>



      {/* END OF HOW TO CONTRIBUTE */}



      <h2 id="code-of-conduct">Code of Conduct</h2>
      <h3 className="sub-head1">Our Pledge:</h3>
      <p className="general-text">
        In the interest of fostering an open and welcoming environment, we as
        contributors and maintainers pledge to making participation in our
        project and our community a harassment-free experience for everyone,
        regardless of age, body size, disability, ethnicity, sex
        characteristics, gender identity and expression, level of experience,
        education, socio-economic status, nationality, personal appearance,
        race, religion, or sexual identity and orientation.
      </p>
      <h3 className="sub-head1"> Our Standards:</h3>
      <h5 className="sub-head3">
        {" "}
        Examples of behavior that contributes to creating a positive environment
        include:
      </h5>
      <ul>
        <li className="general-list"> Using welcoming and inclusive language.</li>
        <li className="general-list">Being respectful of differing viewpoints and experiences</li>
        <li className="general-list"> Gracefully accepting constructive criticism </li>
        <li className="general-list">Focusing on what is best for the community</li>
        <li className="general-list">Showing empathy towards other community members</li>
      </ul>
      <h5 className="sub-head3">Examples of unacceptable behavior by participants include:</h5>
      <ul>
        <li className="general-list">
          {" "}
          The use of sexualized language or imagery and unwelcome sexual
          attention or advances
        </li>
        <li className="general-list">
          Trolling,insulting/derogatory comments, and personal or political
          attacks
        </li>
        <li className="general-list">Public or private harassment</li>
        <li className="general-list">
          {" "}
          Publishing others' private information, such as a physical or
          electronic address, without explicit permission
        </li>
        <li className="general-list">
          Other conduct which could reasonably be considered inappropriate in a
          professional setting
        </li>
      </ul>
      <h3 className="sub-head1">Our Responsibilities:</h3>
      <p className="general-text">
        Project maintainers are responsible for clarifying the standards of
        acceptable behavior and are expected to take appropriate and fair
        corrective action in response to any instances of unacceptable behavior.
      </p>
      <p className="general-text">
        {" "}
        Project maintainers have the right and responsibility to remove, edit,
        or reject comments, commits, code, wiki edits, issues, and other
        contributions that are not aligned to this Code of Conduct, or to ban
        temporarily or permanently any contributor for other behaviors that they
        deem inappropriate, threatening, offensive, or harmful.
      </p>
      <h3 className="sub-head1">Scope:</h3>
      <p className="general-text">
        {" "}
        This Code of Conduct applies both within project spaces and in public
        spaces when an individual is representing the project or its community.
        Examples of representing a project or community include using an
        official project e-mail address, posting via an official social media
        account, or acting as an appointed representative at an online or
        offline event. Representation of a project may be further defined and
        clarified by project maintainers.
      </p>
      <h3 className="sub-head1">Enforcement:</h3>
      <p className="general-text">
        {" "}
        Instances of abusive, harassing, or otherwise unacceptable behavior may
        be reported by contacting the project team at
        designsystems.github@gmail.com. All complaints will be reviewed and
        investigated and will result in a response that is deemed necessary and
        appropriate to the circumstances. The project team is obligated to
        maintain confidentiality with regard to the reporter of an incident.
        Further details of specific enforcement policies may be posted
        separately.
      </p>
      <p className="general-text">
        {" "}
        Project maintainers who do not follow or enforce the Code of Conduct in
        good faith may face temporary or permanent repercussions as determined
        by other members of the project's leadership.
      </p>
      <h3 className="sub-head1"> Attribution: </h3>
      <p className="general-text">
        {" "}
        This Code of Conduct is adapted from the Contributor Covenant, version
        1.4, available at
        https://www.contributor-covenant.org/version/1/4/code-of-conduct.html/
      </p>{" "}
      <p className="general-text">
        For answers to common questions about this code of conduct, see
        https://www.contributor-covenant.org/faq
      </p>
      {/* END OF CODE OF CONDUCT*/}


      <h2 id="license">License</h2>
      <p className="general-text">
        <h4 className="sub-head2">
      
        
          &copy; Copyright 2021-22 The DesignSystems
          <br />
        </h4>
        <br />
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
        <br />
        <br />
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
        <br />
        <br />
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        
      </p>
      <h2 id="rules">Rules</h2>
      <p className="general-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <h2 id="community-measures">Commnunity Measures</h2>
      <p className="general-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
    </div>
  );
};

export default Guidelines;
