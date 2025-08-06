import { ExternalLink, Palette, Package, Globe, Megaphone, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SubsidiariesSection = () => {
const subsidiaries = [
  {
    icon: Palette,
    name: 'Senior Creative Studio',
    specialty: 'التصميم الإبداعي والإعلاني',
    description: 'شركة متخصصة في تطوير الحملات البصرية وتصميم الهويات المؤثرة التي تلامس وجدان الجمهور وتعزز من حضور العلامة التجارية.',
    services: ['تصميم الإعلانات', 'الهوية البصرية', 'إخراج الحملات', 'تصميم الشعارات'],
    gradient: 'from-pink-500 to-violet-600'
  },
  {
    icon: Package,
    name: 'Senior Packaging Solutions',
    specialty: 'تصميم وإنتاج العبوات',
    description: 'تقدم حلولًا مبتكرة لتغليف المنتجات تجمع بين الجاذبية البصرية والجودة التصنيعية، مع مراعاة الاستدامة.',
    services: ['تصميم العبوات', 'إنتاج العلب', 'التغليف البيئي', 'نماذج ثلاثية الأبعاد'],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Printer,
    name: 'Senior Print Center',
    specialty: 'مركز طباعة متكامل',
    description: 'تقديم خدمات الطباعة الرقمية والأوفست بجودة عالية تناسب متطلبات الشركات والعلامات الكبرى.',
    services: ['طباعة أوفست', 'الطباعة الرقمية', 'تجليد وتشطيب', 'خدمات خاصة للتغليف'],
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Globe,
    name: 'Senior Digital Studio',
    specialty: 'تجارب رقمية ومواقع',
    description: 'تطوير مواقع إلكترونية وتجارب مستخدم رقمية تدمج بين الإبداع والتقنية لدعم العلامة التجارية رقميًا.',
    services: ['تطوير المواقع', 'تصميم UX/UI', 'مواقع الشركات', 'المتاجر الإلكترونية'],
    gradient: 'from-sky-500 to-indigo-600'
  },
  {
    icon: Megaphone,
    name: 'Senior Marketing Agency',
    specialty: 'إدارة المحتوى والترويج',
    description: 'شركة تركز على صناعة المحتوى التسويقي وإدارة الحملات الرقمية لتعزيز الحضور الرقمي.',
    services: ['إدارة السوشيال ميديا', 'المحتوى التسويقي', 'تصميم منشورات', 'استراتيجيات الإعلان'],
    gradient: 'from-red-500 to-rose-600'
  }
];


  return (
    <section id="subsidiaries" className="section-padding bg-background">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold my-6 ">
            <span className="text-foreground">شركاتنا</span>
            <span className="text-gold-gradient"> المتخصصة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة متكاملة من الشركات المتخصصة تعمل بتناغم تام لتقديم حلول شاملة 
            تغطي كافة احتياجات التصميم والتطوير
          </p>
        </div>

        {/* Subsidiaries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subsidiaries.map((company, index) => (
            <Card 
              key={index}
              className="card-hover group border-border/50 hover:border-primary/20 overflow-hidden"
            >
              <CardHeader className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <company.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {company.name}
                </CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {company.specialty}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
                
                {/* Services List */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm text-foreground">الخدمات الرئيسية:</h5>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  تواصل مع الشركة
                  <ExternalLink className="mr-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Message */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center border border-primary/20">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            التكامل هو سر قوتنا
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            هذه الشركات لا تعمل بشكل منفصل، بل تتعاون في مشاريع موحدة لتقديم 
            حلول متكاملة تضمن التناسق والجودة العالية في كل مرحلة من مراحل العمل
          </p>
          <Button className="btn-gold">
            اطلب مشروع متكامل
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;