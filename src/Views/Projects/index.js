
import React from 'react';
import ReactDOM from 'react';
import { Container, Grid, Header, List } from "semantic-ui-react";
import LinkDetails from '../../Assets/LinkDetails';

const ProjectDetails = LinkDetails.getProjectData();

const Projects = function Projects() {
  return (
    <div className="Projects">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <List>
                {ProjectDetails.map(data => {
                  return (
                    <List.Item key={data.id}>
                      <List.Content>
                        {data.project_title}
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
};

export default Projects;