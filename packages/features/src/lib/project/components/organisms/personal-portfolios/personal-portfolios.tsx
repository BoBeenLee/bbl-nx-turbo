import cn from 'classnames';
import { personalPortforlios } from '@bbl-turbo/constants';
import { ProjectCard } from '../../organisms/project-card/project-card';
import { SectionTitle } from '@bbl-turbo/ui-components';
import { ProjectLinks } from '@bbl-turbo/ui-components';
import { deepMemoized } from '@bbl-turbo/utils';

interface PersonalPortfoliosProps {
  className?: string;
}

export function PersonalPortfolios(props: PersonalPortfoliosProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
      <SectionTitle className="pb-2" href="#personal">
        Personal
      </SectionTitle>
      {personalPortforlios.map((item) => {
        const {
          id,
          name,
          period,
          skills,
          summary,
          githubUrl,
          homeUrl,
          storybookUrl,
        } = item;
        const links = deepMemoized({
          home: homeUrl,
          github: githubUrl,
          storybook: storybookUrl,
        });
        return (
          <ProjectCard
            key={id}
            name={name}
            period={period}
            techStacks={skills}
            summary={summary}
            IconComponent={<ProjectLinks url={links} />}
          />
        );
      })}
    </div>
  );
}

export default PersonalPortfolios;
