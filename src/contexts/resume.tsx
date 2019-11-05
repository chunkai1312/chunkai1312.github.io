import React from 'react';
import { useTranslation } from 'react-i18next';

export const ResumeContext = React.createContext({});

export const ResumeProvider: React.FC = props => {
  const { i18n } = useTranslation();
  const resume = i18n.getResourceBundle(i18n.language, 'resume');
  return (
    <ResumeContext.Provider value={resume}>
      {props.children}
    </ResumeContext.Provider>
  )
};

export const withResume = () => {
  return (WrappedComponent: React.ElementType) => {
    const ComponentWithResume: React.FC = props => (
      <ResumeContext.Consumer>
        {resume => <WrappedComponent resume={resume} {...props} />}
      </ResumeContext.Consumer>
    )
    return ComponentWithResume
  }
};

export const useResume = () => {
  return React.useContext(ResumeContext) as any;
};

export default ResumeContext;
