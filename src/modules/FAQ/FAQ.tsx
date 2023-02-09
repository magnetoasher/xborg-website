import { useEffect } from "react";
import Collapsible from "react-collapsible";
import { Layout, SectionHead } from "../../components";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export const FAQ = () => {
  useEffect(() => {
    const scrollVM = new ScrollViewModel();
    scrollVM.removeCustomScrolling();
  }, []);

  return (
    <Layout
      className='faq-layout'
      overrideScroll={false}
      components={[
        <div className='faq'>
          <SectionHead title='FAQs' />
          <div className='container container-xl'>
            <div className='faqs'>
              <Collapsible trigger='Heading text' className='collapsible'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. At euismod pulvinar
                  eget sed urna risus ultricies eleifend. Ac cursus nisl nulla
                  volutpat in urna.Lorem ipsum dolor sit amet consectetur. At
                  euismod pulvinar eget sed urna risus ultricies eleifend. Ac
                  cursus nisl nulla volutpat in urna. Lorem ipsum dolor sit amet
                  consectetur. At euismod pulvinar eget sed urna risus ultricies
                  eleifend. Ac cursus nisl nulla volutpat in urna.
                </p>
              </Collapsible>
              <Collapsible trigger='Heading text 2' className='collapsible'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. At euismod pulvinar
                  eget sed urna risus ultricies eleifend. Ac cursus nisl nulla
                  volutpat in urna.Lorem ipsum dolor sit amet consectetur. At
                  euismod pulvinar eget sed urna risus ultricies eleifend. Ac
                  cursus nisl nulla volutpat in urna. Lorem ipsum dolor sit amet
                  consectetur. At euismod pulvinar eget sed urna risus ultricies
                  eleifend. Ac cursus nisl nulla volutpat in urna.
                </p>
              </Collapsible>
              <Collapsible trigger='Heading text 3' className='collapsible'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. At euismod pulvinar
                  eget sed urna risus ultricies eleifend. Ac cursus nisl nulla
                  volutpat in urna.Lorem ipsum dolor sit amet consectetur. At
                  euismod pulvinar eget sed urna risus ultricies eleifend. Ac
                  cursus nisl nulla volutpat in urna. Lorem ipsum dolor sit amet
                  consectetur. At euismod pulvinar eget sed urna risus ultricies
                  eleifend. Ac cursus nisl nulla volutpat in urna.
                </p>
              </Collapsible>
              <Collapsible trigger='Heading text 4' className='collapsible'>
                <p>
                  Lorem ipsum dolor sit amet consectetur. At euismod pulvinar
                  eget sed urna risus ultricies eleifend. Ac cursus nisl nulla
                  volutpat in urna.Lorem ipsum dolor sit amet consectetur. At
                  euismod pulvinar eget sed urna risus ultricies eleifend. Ac
                  cursus nisl nulla volutpat in urna. Lorem ipsum dolor sit amet
                  consectetur. At euismod pulvinar eget sed urna risus ultricies
                  eleifend. Ac cursus nisl nulla volutpat in urna.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>,
      ]}
    />
  );
};
