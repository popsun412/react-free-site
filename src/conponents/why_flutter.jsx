export default function WhyFlutter() {
    return (
        <div className="relative h-screen">
            <div className="h-1/2"></div>
            <div className="bg-[#F8D374] bg-opacity-30 h-1/2"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="mb-8">
                        <h1 className="text-5xl text-center leading-snug">
                            왜 ?<br />
                            <strong>flutter</strong>로 개발해야 하나요?
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 gap-10 max-w-[1025px] pb-24">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shado">
                            <div className="border-[#636363] border-b inline-block mb-2">
                                Reason <span className="pl-12">1</span>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">시간과 비용 절감</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                                Flutter는 안드로이드와 ios 운영체제를 동시에 제작이 됩니다.
                                따라서 안드로이드와 ios를 각각 제작하지 않아 시간과 비용이 절감됩니다.
                            </p>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shado">
                            <div className="border-[#636363] border-b inline-block mb-2">
                                Reason <span className="pl-12">2</span>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">네이티브 수준의 성능</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                                Flutter 위젯은 플랫폼별 차이를 통합하여 iOS와 안드로이드 모두에서,
                                네이티브 수준의 빠른 속도를 보여줍니다.
                            </p>
                        </div>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shado">
                            <div className="border-[#636363] border-b inline-block mb-2">
                                Reason <span className="pl-12">3</span>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">표현력 있고, 유연한 UI</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                                계층형 아키텍처를 통해 완벽한 커스터마이징을 할 수 있기 때문에,
                                매우 빠른 렌더링과 표현력 있고 유연한 디자인을 구현이 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}