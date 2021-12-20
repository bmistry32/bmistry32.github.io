import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./ProjectCards";
import Particle from "../Particle";
import $ from 'jquery';

function Portfolio() {
  $(document).ready(function () {
    $(".filter-b").click(function () {
      var value = $(this).attr('data-filter');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    });

    if ($(".filter-b").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
  });
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong>Portfolio </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingTop: "1rem" }}>
        <em style={{ color: "lightblue" }}>It is a known issue that modals cannot be closed on mobile devices. On desktop please use the `esc` button.</em>
          <Col md={12}>
            <div class="port-head-cont">
              <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="all">All</button>
              <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="ml">Machine Learning</button>
              {/* <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="web">Web Design</button> */}
              {/* <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="hack">Hackathon</button> */}
              <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="uni">University</button>
              <button class="btn-show bttn-jelly btn-portfolio filter-b" data-filter="awards">Awards & Certs</button>
            </div>
          </Col>
        </Row>

        <div class="row">
          <PortfolioCard
            img="q484q21wussb6xk/p-19"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter ml uni all"
            title="Combining Abstractive and Extractive Summarisation Techniques"
            date=" September 2019 - March 2020"
            tools="Python, Keras, NLTK, Anaconda, Recurrent Neural Network,
            Machine Learning, Natural Language Processing"
            url="https://www.github.com/bmistry12/final-year-project"
            text="This project was completed as part of my final year dissertation for BSc. Computer Science at the University of Birmingham.
            The final mark of this project was 76%."
            subtext="In modern-day society, we are surrounded by data, most of which is too long and laborious for the everyday person to read comprehensively. With the art of generating extractive summaries becoming increasingly trivial, the challenge of producing abstractive summaries that can understand and convey the meaning of a document remains prominent within the field of natural language processing. Although summarisation is a task that humans can easily complete, developing automated approaches that can generalise well with different data formats remains a challenge. Despite a recent surge in research to improve abstractive summarisation methods, there are still outstanding problems regarding the validity of generated summaries. The method proposed experiments with combining extractive and abstractive summarisation methods, to evaluate whether extractive methods can be effective in driving more human-like abstractive summaries. The overall aims and evaluators are the reduction of repetition, and the improvement of precision, recall and human-judged grammatical correctness."
          />
          <PortfolioCard
            img="hl02ji6l25ac7l9/p-18"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter ml uni all"
            title="Fast MRI Reconstruction"
            date="December 2019"
            tools="Convolutional Neural Network, Python, PyTorch, Machine Learning"
            url="https://github.com/bmistry12/fastmri-reconstruction"
            text="Long acquisition times in fully-sampled MRI lead to low patient throughput, problems with patient comfort and compliance, artefacts from patient motion, and high examination costs. Reducing acquisition time using under-sampling acceleration rates (4 fold and 8 fold masks), helps to mitigate these issues, however, this comes at the const of reconstructed image quality."
            subtext="The project aimed to improve the viability of the more efficient under-sampling strategy by designing a system that maximises the quality of under-sampled reconstructions. High-quality reconstructions are images that closely align with the ground truth, the fully-sampled image. SSIM (Structural Similarity Index Measure) is used to evaluate the success of the model's output against the ground truth image.
            The model implemented was a U-Net, with RMSprop as an optimizer."
          />
          {/* <PortfolioCard
            img="r5gczlzf2rt6odi/p-17"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter ml hack all"
            title="Berlin Classifier"
            date="September 2019"
            tools="K-Nearest Neighbours Python Flask Keras JavaScript"
            url="https://github.com/alexiscorney/BerlinClassifier/"
            text="An application developed along with two others during the Kainos AI Camp Hackathon, that came in 3rd place."
            subtext="We wanted to create an easy way to identify areas of new cities that are best for a user to live in. This extends to those seeking places to stay on holiday or a completely new place to live. A K Nearest Neighbours Classifier was trained on the data, and used to classify the rating of each different neighbourhood in Berlin, where a rating higher than 80% represented a 'good' area. Areas could then be classified based on their latitude and longitude, giving an overall view of the city, as shown in the above picture. This then allowed ratings of unseen locations to be predicted."
          /> */}
          <PortfolioCard
            img="azgw8eyqebc11ce/a-2-small"
            modal_img="o3heqxcfmuohj4n/a-2.gif"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter awards"
            title="Google Cloud Platform: Professional Cloud Architect Training"
            date="Jan 2019 - May 2019"
            url="https://www.linkedin.com/in/bhavina-mistry/t"
            text="A series of GCP training videos and lab exercises hosted by Coursera, aimed to prepare you for the GCP Professional Cloud Architect examination. This training course is made up of 6 courses:"
            subtext="Google Cloud Platform Fundamentals: Core Infrastructure
            Essential Cloud Infrastructure: Foundation
            Essential Cloud Infrastructure: Core Services
            Elastic Cloud Infrastructure: Scaling and Automation
            Elastic Cloud Infrastructure: Containers and Services
            Reliable Cloud Infrastructure: Design and Process"
          />
          {/* <PortfolioCard
            img="oe3vsqk6bl61ube/p-16"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter web hack all"
            title="Depaul, On Time"
            date="February 2019"
            tools="AngularJS Python SQL TypeScript"
            url="https://github.com/bcghackathon"
            text="Application developed during the BCG DV Hacking Homelessness for DePaul.
            It is web application that's goal is to help progression coaches that work for the charity DePaul, monitor and easily send event reminders to their clients. The front end is written using AngularJS, and the backend in Python using Flask and MySQL lite. In order to automatically send messages, via SMS and Whatsapp, to clients we chose to use the communication api Twilio,"
          /> */}
          {/* <PortfolioCard
            img="8zpfk9aydz8h2lm/p-16"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter hack all"
            title="ServiceWow - Social Media Response Automation"
            date="June 2018"
            tools="ServiceNow Natural Language Processing"
            // url="www.github.com/bmistry12/final-year-project"
            text="Worked with four others to create an application that fetches data from a company’s social media outlets. processes them Using techniques, sends out automated responses, and sends the issue/feedback to the relevant members of staff automatically via the ServiceNow platform.
            This project was carried out as part of a ServiceNow Hackathon. We came in 2nd Place"
          /> */}
          <PortfolioCard
            img="puz2j3hp9w1untw/a-1-small"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter awards"
            title="Peers Assisted Study Sessions Leader For Computer Science"
            date="Sep 2017 - May 2018"
            text="
            PASS is a student led scheme that enables second year students to assist groups of first year students with academic topics that they are struggling with. This was achieved through numerous methods, most notably so via white board based discussions and guided question answering.
            In addition to this, leaders had the responsibility of advising students on general university related issues, and giving them insights into higher year modules.
            This experience helped to consolidate my own knowledge of course content, and enabled me to enhance my communication and team working skills."
          />
          {/* <PortfolioCard
            img="0h642c321rzkfmr/p-3"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter uni all"
            title="Automated Email Data Extraction"
            date="Oct 2017 - Dec 2017"
            tools="Python Natural Language Processing NLTK"
            url="https://github.com/bmistry12/seminar-extraction"
            text="Used several NLP techniques to train a system, using training data, so that unseen seminar emails can effectively be tagged with entities such as speakers and locations. An automated ontology classification to classify emails by seminar subject type was also generated."
          /> */}
          {/* <PortfolioCard
            img="4be3y1p6so43q2w/p-4"
            modal_img="lpx3gu2sl3dxvxc/p-4.gif"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter game all"
            title="Solitaire"
            date="July 2017 - Aug 2018"
            tools="Java"
            url="https://github.com/bmistry12/solitaire"
            text="Project to implement Solitaire, with an additional computer automated mode."
          /> */}
          {/* <PortfolioCard
            img="3g3bzfsdgtbjs9z/p-5.jpg"
            modal_img="zgcj1pmxoi8qaa8/p-5.gif"
            filters="col-sm-4 col-lg-3 col-md-4 portfolio-item filter uni all"
            title="Autonomous Warehouse Simulation"
            date="Feb 2017 - March 2017"
            tools="Java leJOS log4J JUnit Robotics"
            url="https://github.com/bmistry12/autonomous-warehouse"
            text="Worked in a team of 7 to create a Warehouse simulation navigated by multiple Autonomous robots. I developed the Warehouse Management Interface; a GUI that displays real time movement of the robots, as well as showing jobs in progress/completed, and the total reward of jobs completed.
            This project was completed as part of my first year Robot Programming module."
            subtext="We received 4501 points which was the best score within the last 2 years (about 20 teams per year).
            For comparison 2nd team this year received 3957 points, 3rd - 3163p and 4th - 1767p, whereas the first team last year received ~2300 points."
          /> */}
        </div>
      </Container>
    </Container>
  );
}

export default Portfolio;
