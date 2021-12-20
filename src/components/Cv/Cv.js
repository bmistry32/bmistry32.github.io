import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import { EducationContent, ExperienceContent, ExperienceFullyConfiguredContent } from "./CvContent";
import '../../assets/bttn-min.css'

function CV() {
  const pdf = "https://www.dropbox.com/s/3xdpzc74p2a6998/cv-one-page.pdf?dl=0";
  return (
    <Container fluid className="cv-section">
      <Particle />
      <Container>
        <Row className="cv">
          <Col md={12}>
            <h3 className="cv-title">Experience</h3>
            <ExperienceContent
              title="Infrastructure Software Engineer"
              subtitle="Smarkets, London UK"
              date="September 2020 - Present"
              content={[
                "Working with various aspects of the Infrastructure stack to fix bugs, upgrade tooling and charts, and automate manual tasks.",
                "Implemented Google SAML login for Mediawiki.",
                "Automated fetch of available versions for third-party tooling andd generation of version upgrade MRs.",
                "Upgraded in-house helm deployment tool to allow for folders of service files to be deployed in parallel.",
                "Aiding in setting up the Staging Environmnet.",
                "Automation pipeline for user onboarding and offboarding to all internal accounts from BambooHR. (GSuite, GitLab, Pritunl, Sentry, AWS)",
                "Automation pipelines for: user account sync between tooling, GSuite audit user reports, long term k8s database backup retention, API user IP address updates in Cloudflare.",
                "Migration of legacy Ansible configuration to Terraform for resouces such as AWS Lambda, IAM, S3, Cloudwatch and CloudTrail.",
                "Granted engineers full dual membership for resources through LDAP for K8s",
                "Terraform configuration for GCP stack and Cloudflare Teams for MDM",
                "EKS upgrade from 1.19 to 1.21",
              ]}
            />
            <ExperienceFullyConfiguredContent
              title="DevOps Engineer"
              subtitle="Accenture PLC, London UK - Industrial Year"
              date="August 2018 - August 2019"
              content={[
                <strong>FINTECH BLOCKCHAIN POC</strong>,
                <em className="cv-date-faded"><br />September 2018 - October 2018</em>,
                <div style={{ textAlign: "left", justifyContent: "left" }}>
                  <ul>
                    <li>Configuring DevOps CI tools and creating pipelines in Jenkins for R3 Corda Blockchain; using Docker and Ansible to deploy 8 Corda nodes onto a single AWS server.</li>
                    <li>Using CloudFormation, and Terraform to provision infrastruture in AWS</li>
                  </ul>
                </div>,
                <strong>GENERALI - GEB POC</strong>,
                <em className="cv-date-faded"><br />October 2018 - December 2018</em>,
                <div style={{ textAlign: "left", justifyContent: "left" }}>
                  <ul>
                    <li> Jenkinsfile driven CI pipelines to deploy a 6 node R3 Corda Blockchain network over 4 Azure servers, as sole DevOps Engineer.</li>
                    <li> Node and network deployment using Ansible.</li>
                    <li> Using Terraform to provision infrastructure in Azure, including Azure VPN.</li>
                    <li> Blockchain For The Employee Benefits Industry & For The Network / Aiming to Transform the Reinsurance Process for Captive Services</li>
                  </ul>
                </div>,
                <strong>BIOPHARMACEUTICAL COMPANY</strong>,
                <div style={{ textAlign: "left", justifyContent: "left" }}>
                  <em className="cv-date-faded"><br />February 2019 - April 2019</em>,
                <ul>
                    <li> Configuring CI/CD tools for Mulesoft Anypoint Cloudhub using Jenkinsfiles and DSL.</li>
                    <li> Setup and maintenance of an OpenVPN server.</li>
                    <li> Producing standardised teaching documentation for setting up and using DevOps tooling.</li>
                  </ul>
                </div>,
                <strong>INTERNAL PLATFORM</strong>,
                <em className="cv-date-faded"><br />May 2019 - August 2019</em>,
                <div style={{ textAlign: "left", justifyContent: "left" }}>
                  <ul>
                    <li> Jenkins CI/CD for Hyperledger Fabric Blockchain; using Docker and Ansible for node deployment.</li>
                    <li> Provisioning infrastructure using CloudFormation</li>
                    <li> AWS Cloud Account Hardening and Security Patching</li>
                  </ul>
                </div>,
              ]}
            />
          </Col>
          <Col md={12}>
            <h3 className="cv-title">Education</h3>
            <EducationContent
              title="BSc (Hons) Computer Science with Industrial Year "
              subtitle="University of Birmingham"
              date="September 2016 - July 2020"
              content={["GPA: 4.25, Final Grade 75.321% (1:1)"]}
            />
            <EducationContent
              title="A Level"
              subtitle="West Coventry Sixth Form"
              date="September 2014 - July 2016"
              content={["Computing, Mathematics, Physics"]}
            />
            <EducationContent
              title="GCSE"
              subtitle="Tile Hill Wood School And Language College"
              date="September 2009 - July 2014"
              content={["12 GCSE's A* - A"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="btn-show bttn-jelly" href={pdf} target="_blank">
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default CV;
