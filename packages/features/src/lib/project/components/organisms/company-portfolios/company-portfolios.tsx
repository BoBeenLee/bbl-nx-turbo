import cn from 'classnames';
import { companyPortfolios } from '@bbl-turbo/constants';
import { ProjectCard } from '../../organisms/project-card/project-card';
import { SectionTitle } from '@bbl-turbo/ui-components';
import { ProjectLinks } from '@bbl-turbo/ui-components';
import { deepMemoized } from '@bbl-turbo/utils';

interface CompanyPortfoliosProps {
  className?: string;
}

export function CompanyPortfolios(props: CompanyPortfoliosProps) {
  const { className } = props;
  return (
    <div className={cn(className, 'space-y-8')}>
      <SectionTitle className="pb-2" href="#company">
        Company
      </SectionTitle>
      {companyPortfolios.map((item) => {
        const {
          id,
          name,
          period,
          skills,
          summary,
          homeUrl,
          githubUrl,
          linkUrl,
          googleStoreUrl,
          appStoreUrl,
        } = item;
        const links = deepMemoized({
          home: homeUrl,
          link: linkUrl,
          github: githubUrl,
          googleStore: googleStoreUrl,
          appStore: appStoreUrl,
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

export default CompanyPortfolios;
