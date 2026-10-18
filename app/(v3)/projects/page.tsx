import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Kicker } from "../_components/kicker";
import { Section, Spacer } from "../_components/section";
import Footer from "../footer";
import { navLinksV3 } from "@/data/nav-links";

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div>
            <Kicker>
              <Breadcrumb>
                <BreadcrumbList className="text-sm">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={navLinksV3[0][1]}>
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Projects</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Kicker>
            <div className="px-6 pb-12 pt-6 lg:px-9">
              <h1 className="max-w-[18ch] font-serif text-3xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Projects
              </h1>
              <p className="mt-6 max-w-136 text-sm leading-7 tracking-wide text-copy"></p>
            </div>
          </div>
        </div>
      </Section>
      <Spacer />
      <Footer />
    </>
  );
}
